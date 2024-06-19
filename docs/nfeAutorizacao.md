# NfeAutorizacao

## Descrição

O Web Service `NfeAutorizacao` é utilizado para enviar um lote de NF-e (Nota Fiscal Eletrônica) para a SEFAZ (Secretaria da Fazenda) para autorização.

## Estrutura da Mensagem de Entrada

A mensagem de entrada segue o layout definido pelo schema `enviNFe_v4.00.xsd`.

## Estrutura da Mensagem de Retorno

A mensagem de retorno segue o layout definido pelo schema `retEnviNFe_v4.00.xsd`.

## Exemplo de Código Node.js

```javascript
const axios = require('axios');
const fs = require('fs');
const https = require('https');
const xml2js = require('xml2js');

// Leitura do certificado e chave privada
const cert = fs.readFileSync('certificado.crt');
const key = fs.readFileSync('chave_privada.pem');

// Configuração do cliente HTTPS
const agent = new https.Agent({
  cert: cert,
  key: key,
  rejectUnauthorized: false
});

// XML da NF-e
const nfeXML = fs.readFileSync('nfe.xml', 'utf8');

// URL do Web Service
const url = 'https://nfe.sefaz.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx';

// Função para enviar o lote de NF-e
async function enviarNFe() {
  try {
    const response = await axios.post(url, nfeXML, {
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

enviarNFe();
```
