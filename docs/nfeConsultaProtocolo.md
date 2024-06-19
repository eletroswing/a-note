# NfeConsultaProtocolo


## Descrição
O Web Service `NfeConsultaProtocolo` é utilizado para consultar a situação atual de uma NF-e já processada.

## Estrutura da Mensagem de Entrada
A mensagem de entrada segue o layout definido pelo schema `consSitNFe_v4.00.xsd`.

## Estrutura da Mensagem de Retorno
A mensagem de retorno segue o layout definido pelo schema `retConsSitNFe_v4.00.xsd`.

## Exemplo de Código Node.js

```javascript
const axios = require('axios');
const fs = require('fs');
const https = require('https');

// Leitura do certificado e chave privada
const cert = fs.readFileSync('certificado.crt');
const key = fs.readFileSync('chave_privada.pem');

// Configuração do cliente HTTPS
const agent = new https.Agent({
  cert: cert,
  key: key,
  rejectUnauthorized: false
});

// XML de consulta
const consultaXML = `
  <consSitNFe versao="4.00" xmlns="http://www.portalfiscal.inf.br/nfe">
    <tpAmb>1</tpAmb>
    <xServ>CONSULTAR</xServ>
    <chNFe>35180612345678901234550000000012345678901234</chNFe>
  </consSitNFe>
`;

// URL do Web Service
const url = 'https://nfe.sefaz.rs.gov.br/ws/NfeConsultaProtocolo/NFeConsultaProtocolo4.asmx';

// Função para consultar a situação da NF-e
async function consultarProtocoloNFe() {
  try {
    const response = await axios.post(url, consultaXML, {
      headers: {
        'Content-Type': 'application/xml',
      },
      httpsAgent: agent,
    });
    console.log('Resposta:', response.data);
  } catch (error) {
    console.error('Erro:', error);
  }
}

consultarProtocoloNFe();
