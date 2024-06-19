
# NfeStatusServico

## Descrição
O Web Service `NfeStatusServico` é utilizado para consultar o status atual do serviço de autorização da SEFAZ.

## Estrutura da Mensagem de Entrada
A mensagem de entrada segue o layout definido pelo schema `consStatServ_v4.00.xsd`.

## Estrutura da Mensagem de Retorno
A mensagem de retorno segue o layout definido pelo schema `retConsStatServ_v4.00.xsd`.

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

// XML de consulta de status do serviço
const statusServicoXML = `
  <consStatServ versao="4.00" xmlns="http://www.portalfiscal.inf.br/nfe">
    <tpAmb>1</tpAmb>
    <cUF>35</cUF>
    <xServ>STATUS</xServ>
  </consStatServ>
`;

// URL do Web Service
const url = 'https://nfe.sefaz.rs.gov.br/ws/NfeStatusServico/NFeStatusServico4.asmx';

// Função para consultar o status do serviço
async function consultarStatusServico() {
  try {
    const response = await axios.post(url, statusServicoXML, {
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

consultarStatusServico();
