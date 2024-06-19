
# NfeDistribuicaoDFe

## Descrição
O Web Service `NfeDistribuicaoDFe` é utilizado para obter documentos fiscais eletrônicos que foram destinados ao contribuinte.

## Estrutura da Mensagem de Entrada
A mensagem de entrada segue o layout definido pelo schema `distDFeInt_v1.01.xsd`.

## Estrutura da Mensagem de Retorno
A mensagem de retorno segue o layout definido pelo schema `distDFeInt_v1.01.xsd`.

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

// XML de distribuição
const distribuicaoXML = `
  <distDFeInt xmlns="http://www.portalfiscal.inf.br/nfe" versao="1.01">
    <tpAmb>1</tpAmb>
    <cUFAutor>35</cUFAutor>
    <CNPJ>12345678901234</CNPJ>
    <distNSU>000000000000000</distNSU>
  </distDFeInt>
`;

// URL do Web Service
const url = 'https://nfe.sefaz.rs.gov.br/ws/NfeDistribuicaoDFe/NFeDistribuicaoDFe.asmx';

// Função para obter documentos fiscais eletrônicos
async function obterDFe() {
  try {
    const response = await axios.post(url, distribuicaoXML, {
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

obterDFe();
