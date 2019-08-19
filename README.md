# Example cluster

Exemplo de cluster em NodeJS

**OBS:** TODAS AS INFORMAÇÕES E CÓDIGO FORAM RETIRADAS DA REFERÊNCIA QUE SE ENCONTRA AO FINAL DA PÁGINA

---

## Como rodar

```console
  yarn
  yarn start
```

### Principais dependências

- express

### Descrição detalhada

Primeiro,importamos o módulo de cluster. Então nós verificamos se o processo atual é `master`.

Obtemos a quantidade total de núcleos de CPU e geramos `workers`.

Caso contrário, o processo atual é um `worker`.

Além disso, estamos configurando um assinante para o evento "exit". Se um `worker` morre por qualquer motivo, geramos um novo para substituição.

## References

[softwareontheroad](https://softwareontheroad.com/nodejs-scalability-issues/#resources)
