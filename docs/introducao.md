# Introdução à NF-e
A Nota Fiscal Eletrônica (NF-e) é um documento fiscal emitido e armazenado eletronicamente, com o intuito de documentar, para fins fiscais, uma operação de circulação de mercadorias ou uma prestação de serviços ocorrida entre as partes. A validade jurídica da NF-e é garantida pela assinatura digital do emitente e pela autorização de uso fornecida pelo Fisco.

# Como Criar uma NF-e
Para criar uma NF-e, é necessário seguir o layout definido pelo manual de orientação do contribuinte e preencher as informações obrigatórias conforme o schema XML nfe_v4.00.xsd.

# Estrutura Básica de uma NF-e
Abaixo está um exemplo básico de como criar o XML de uma NF-e:

```xml 
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

```

# O que é NF-e em Contingência
A NF-e em contingência é uma alternativa usada quando o sistema de autorização da SEFAZ está indisponível. Existem diversos tipos de contingência, tais como:
    - Contingência FS-DA: Uso de Formulário de Segurança impresso.
    - Contingência SCAN: Sistema de Contingência do Ambiente Nacional.
    - Contingência DPEC: Declaração Prévia de Emissão em Contingência.
    - Contingência EPEC: Evento Prévio de Emissão em Contingência.

Quando emitida em contingência, a NF-e deve ser enviada para a SEFAZ assim que o serviço for restabelecido e em até 24 horas após sua emissão..

# Como Obter os Certificados e Chaves
Para utilizar os Web Services da NF-e, é necessário obter um certificado digital e uma chave privada. Esses certificados podem ser adquiridos através de autoridades certificadoras credenciadas, como Serasa, Certisign, entre outras.

Passos para Obter o Certificado:
    - Escolher uma Autoridade Certificadora: Selecione uma autoridade certificadora credenciada pelo ICP-Brasil.
    - Solicitar o Certificado: Siga o processo de solicitação conforme as instruções da autoridade certificadora.
    - Validar o Certificado: Realize a validação presencial ou online conforme exigido.
    - Obter o Certificado e a Chave Privada: Após a validação, você receberá o certificado digital e a chave privada.

# Configurando o HTTPS Agent
Para configurar o https.Agent no Node.js, é necessário carregar o certificado e a chave privada:

```js
const fs = require('fs');
const https = require('https');

const cert = fs.readFileSync('caminho/para/seu/certificado.crt');
const key = fs.readFileSync('caminho/para/sua/chave_privada.pem');

const agent = new https.Agent({
  cert: cert,
  key: key,
  rejectUnauthorized: false // Apenas para desenvolvimento; em produção deve ser true
});

```

# Informações Relevantes para Desenvolvedores
    - Ambiente de Desenvolvimento: Utilize o ambiente de homologação da SEFAZ para testes antes de migrar para o ambiente de produção.
    - Schemas XML: Utilize os schemas XML atualizados para validação das mensagens.
    - Certificação Digital: Verifique a validade e renovação dos certificados digitais.
    - Segurança: Em produção, certifique-se de que rejectUnauthorized esteja configurado como true no https.Agent.
    - Logs e Monitoramento: Implemente logs detalhados para rastreamento e monitoramento das transações com a SEFAZ.

# Serviços
Para criar a documentação da API da NF-e (Nota Fiscal Eletrônica), vamos abordar os principais Web Services disponíveis. Cada serviço será descrito e um exemplo de código em Node.js será fornecido para ilustrar a integração com esses serviços.

Os Web Services principais são:
    - [CriandoNfe](/docs/criacaoNfe.md)
    - [TiposContingencia](/docs/contingenciaNfe.md.md)
    - [NfeAutorizacao](/docs/nfeAutorizacao.md)
    - [NfeRetAutorizacao](/docs/nfeRetAutorizacao.md)
    - [NfeInutilizacao](/docs/nfeInutilizacao.md)
    - [NfeConsultaProtocolo](/docs/nfeConsultaProtocolo.md)
    - [NfeStatusServico](/docs/nfeStatusServico.md)
    - [NfeConsultaCadastro](/docs/nfeConsultaCadastro.md)
    - [NfeDistribuicaoDFe](/docs/nfeDistribuicaoDFe.md)
