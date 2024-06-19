# Criando uma NF-e

## Descrição
Uma Nota Fiscal Eletrônica (NF-e) documenta eletronicamente operações de circulação de mercadorias ou prestação de serviços.

## Estrutura da Mensagem de Entrada
A mensagem de entrada segue o layout definido pelo schema `nfe_v4.00.xsd`.

## Exemplo de Código Node.js

```javascript
const fs = require('fs');
const xml2js = require('xml2js');

const nfeXML = `
<?xml version="1.0" encoding="UTF-8"?>
<NFe xmlns="http://www.portalfiscal.inf.br/nfe">
  <infNFe versao="4.00" Id="NFe35180612345678901234550000000012345678901234">
    <ide>
      <cUF>35</cUF>
      <cNF>12345678</cNF>
      <natOp>Venda de mercadorias</natOp>
      <mod>55</mod>
      <serie>1</serie>
      <nNF>123456</nNF>
      <dhEmi>2024-06-19T12:00:00-03:00</dhEmi>
      <tpNF>1</tpNF>
      <idDest>1</idDest>
      <cMunFG>3550308</cMunFG>
      <tpImp>1</tpImp>
      <tpEmis>1</tpEmis>
      <cDV>1</cDV>
      <tpAmb>1</tpAmb>
      <finNFe>1</finNFe>
      <indFinal>1</indFinal>
      <indPres>1</indPres>
      <procEmi>0</procEmi>
      <verProc>4.00</verProc>
    </ide>
    <emit>
      <CNPJ>12345678901234</CNPJ>
      <xNome>Empresa Exemplo Ltda</xNome>
      <enderEmit>
        <xLgr>Rua Exemplo</xLgr>
        <nro>1000</nro>
        <xBairro>Centro</xBairro>
        <cMun>3550308</cMun>
        <xMun>São Paulo</xMun>
        <UF>SP</UF>
        <CEP>01000000</CEP>
        <cPais>1058</cPais>
        <xPais>Brasil</xPais>
        <fone>1133334444</fone>
      </enderEmit>
      <IE>1234567890</IE>
      <CRT>3</CRT>
    </emit>
    <dest>
      <CNPJ>98765432100012</CNPJ>
      <xNome>Cliente Exemplo Ltda</xNome>
      <enderDest>
        <xLgr>Av. Exemplo</xLgr>
        <nro>2000</nro>
        <xBairro>Jardim</xBairro>
        <cMun>3550308</cMun>
        <xMun>São Paulo</xMun>
        <UF>SP</UF>
        <CEP>02000000</CEP>
        <cPais>1058</cPais>
        <xPais>Brasil</xPais>
        <fone>1122223333</fone>
      </enderDest>
      <indIEDest>1</indIEDest>
      <IE>9876543210</IE>
    </dest>
    <det nItem="1">
      <prod>
        <cProd>001</cProd>
        <cEAN>7891234567890</cEAN>
        <xProd>Produto Exemplo</xProd>
        <NCM>61091000</NCM>
        <CFOP>5102</CFOP>
        <uCom>UN</uCom>
        <qCom>10.0000</qCom>
        <vUnCom>50.00</vUnCom>
        <vProd>500.00</vProd>
        <cEANTrib>7891234567890</cEANTrib>
        <uTrib>UN</uTrib>
        <qTrib>10.0000</qTrib>
        <vUnTrib>50.00</vUnTrib>
        <indTot>1</indTot>
      </prod>
      <imposto>
        <ICMS>
          <ICMS00>
            <orig>0</orig>
            <CST>00</CST>
            <modBC>3</modBC>
            <vBC>500.00</vBC>
            <pICMS>18.00</pICMS>
            <vICMS>90.00</vICMS>
          </ICMS00>
        </ICMS>
        <PIS>
          <PISAliq>
            <CST>01</CST>
            <vBC>500.00</vBC>
            <pPIS>1.65</pPIS>
            <vPIS>8.25</vPIS>
          </PISAliq>
        </PIS>
        <COFINS>
          <COFINSAliq>
            <CST>01</CST>
            <vBC>500.00</vBC>
            <pCOFINS>7.60</pCOFINS>
            <vCOFINS>38.00</vCOFINS>
          </COFINSAliq>
        </COFINS>
      </imposto>
    </det>
    <total>
      <ICMSTot>
        <vBC>500.00</vBC>
        <vICMS>90.00</vICMS>
        <vICMSDeson>0.00</vICMSDeson>
        <vFCP>0.00</vFCP>
        <vBCST>0.00</vBCST>
        <vST>0.00</vST>
        <vFCPST>0.00</vFCPST>
        <vFCPSTRet>0.00</vFCPSTRet>
        <vProd>500.00</vProd>
        <vFrete>0.00</vFrete>
        <vSeg>0.00</vSeg>
        <vDesc>0.00</vDesc>
        <vII>0.00</vII>
        <vIPI>0.00</vIPI>
        <vIPIDevol>0.00</vIPIDevol>
        <vPIS>8.25</vPIS>
        <vCOFINS>38.00</vCOFINS>
        <vOutro>0.00</vOutro>
        <vNF>500.00</vNF>
      </ICMSTot>
    </total>
    <transp>
      <modFrete>0</modFrete>
    </transp>
    <cobr>
      <fat>
        <nFat>123456</nFat>
        <vOrig>500.00</vOrig>
        <vDesc>0.00</vDesc>
        <vLiq>500.00</vLiq>
      </fat>
      <dup>
        <nDup>001</nDup>
        <dVenc>2024-07-19</dVenc>
        <vDup>500.00</vDup>
      </dup>
    </cobr>
    <infAdic>
      <infCpl>Informações adicionais</infCpl>
    </infAdic>
  </infNFe>
</NFe>
`;

const parser = new xml2js.Parser();
parser.parseString(nfeXML, (err, result) => {
  if (err) {
    console.error('Erro ao criar XML:', err);
  } else {
    console.log('XML criado com sucesso:', result);
  }
});
