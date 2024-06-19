# NfeRetAutorizacao

## Descrição
O Web Service `NfeRetAutorizacao` é utilizado para consultar o resultado do processamento de um lote de NF-e.

## Estrutura da Mensagem de Entrada
A mensagem de entrada segue o layout definido pelo schema `consReciNFe_v4.00.xsd`.

## Estrutura da Mensagem de Retorno
A mensagem de retorno segue o layout definido pelo schema `retConsReciNFe_v4.00.xsd`.

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

// XML da consulta
const consultaXML = `
  <consReciNFe versao="4.00" xmlns="http://www.portalfiscal.inf.br/nfe">
    <tpAmb>1</tpAmb>
    <nRec>123456789012345</nRec>
  </consReciNFe>
`;

// URL do Web Service
const url = 'https://nfe.sefaz.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx';

// Função para consultar o resultado do processamento do lote de NF-e
async function consultarNFe() {
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

consultarNFe();
