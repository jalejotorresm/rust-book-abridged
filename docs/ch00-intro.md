---
sidebar_position: 1
slug: /
title: "El libro de Rust (Resumido)"
hide_title: true
---

<div align="center">
    <h1>El libro de Rust (Resumido)</h1>
    <p>v1.0.0</p>
    <p>Autor: Jason Walton</p>
    <p>Basado en <a href="https://doc.rust-lang.org/stable/book/">"El Lenguaje de Programación Rust"</a> de Steve Klabnik y Carol Nichols.</p>
</div>

La versión PDF de este libro (original en inglés) está disponible [aquí](https://github.com/jwalton/rust-book-abridged/releases/latest/download/rust-book-abridged.pdf).

## ¿De qué trata este libro?

Esta es una versión resumida (o quizás sería más apropiado decir condensada) de ["El Lenguaje de Programación Rust" (Version en inglés)](https://doc.rust-lang.org/stable/book/title-page.html) (también conocido como "El libro de Rust"). Esto no es un trabajo original: todos los nombres de los capítulos y ejemplos en este libro han sido copiados textualmente del original, pero toda la prosa ha sido reescrita desde cero, omitiendo cualquier cosa que no trate sobre aprender Rust. Este libro tiene aproximadamente la mitad de la extensión del original, pero no creo que le falte nada que un desarrollador de software experimentado no sepa ya.

El libro de Rust es un recurso excelente para aprender Rust, especialmente si eres nuevo en la programación. Si estás en esta categoría, te sugiero encarecidamente que dejes este libro y leas el original. Pero... el libro de Rust es bastante extenso. Si ya estás familiarizado con uno o más lenguajes de programación, es probable que ya conozcas muchos de los conceptos que el libro cubre, y podrías beneficiarte de esta versión más corta. Si ya estás familiarizado con ideas como el Stack y el Heap, el desarrollo basado en tests, o el [principio DRY](https://es.wikipedia.org/wiki/No_te_repitas), entonces esta versión podría ser una mejor lectura para ti.

Esto no pretende ser una crítica al libro de Rust. Es excelente y está bien escrito, y hay una razón por la cual es altamente recomendado. El problema aquí no es el libro original, sino más bien una desconexión en cuanto al público objetivo.

## ¿Qué es lo diferente de este libro?

Como se mencionó anteriormente, los nombres de los capítulos en este libro son los mismos que en el original, y en muchos casos las subsecciones dentro de cada capítulo también lo son. En la mayoría de los casos, los ejemplos han sido copiados directamente del original. Mantener la estructura y los ejemplos originales busca facilitar el salto entre un libro y otro en caso de que este no sea claro o cubra conceptos con los que no estés familiarizado.

En las partes donde el original construye un ejemplo de código paso a paso, esta versión en la mayoría de los casos presenta el código terminado para que lo leas, y luego señala algunas partes interesantes. En la medida de lo posible, he tratado de agregar material que creo que un lector avanzado encontraría interesante. En algunos casos, esto explica las cosas de una manera diferente al original. Esta versión también añade un capítulo adicional sobre programación asincrónica.

Tengo una gran experiencia en TypeScript, Java, C/C++, Go y algunos otros lenguajes. Pasé aproximadamente dos semanas armando este libro, leyendo el original, resumiéndolo e investigando partes que no estaban claras. ¡Espero que alguien lo encuentre útil! Sin embargo, soy nuevo en Rust, así que si encuentras algo que no tenga sentido, no dudes en [informarlo a través de un issue en el repositorio original](https://github.com/jwalton/rust-book-abridged).

Este libro fue escrito completamente por un humano: nada de esto fue generado por ChatGPT.

Si disfrutas este libro, por favor [dale una estrella al repositorio original en GitHub](https://github.com/jwalton/rust-book-abridged).

## Tabla de Contenidos

- [Capítulo 1: Comenzando][chap1]
- [Capítulo 2: Juego de Adivinanzas][chap2]
- [Capítulo 3: Conceptos Comunes de Programación][chap3]
- [Capítulo 4: Ownership, Referencias y Slices][chap4]
- [Capítulo 5: Usando Structs para Agrupar Datos Relacionados][chap5]
- [Capítulo 6: Enums y Pattern Matching][chap6]
- [Capítulo 7: Gestionando Proyectos en Crecimiento con Paquetes, Crates y Módulos][chap7]
- [Capítulo 8: Colecciones Comunes][chap8]
- [Capítulo 9: Manejo de Errores][chap9]
- [Capítulo 10: Tipos Genéricos, Traits y Lifetimes][chap10]
- [Capítulo 11: Escribiendo Tests Automatizados][chap11]
- [Capítulo 12: Un Proyecto de I/O: Construyendo un Programa de Línea de Comandos][chap12]
- [Capítulo 13: Características de Lenguajes Funcionales: Iteradores y Closures][chap13]
- [Capítulo 14: Más sobre Cargo y Crates.io][chap14]
- [Capítulo 15: Smart Pointers][chap15]
- [Capítulo 16: Concurrencia sin Miedo][chap16]
- [Capítulo 17: Características de Rust Orientadas a Objetos][chap17]
- [Capítulo 18: Patterns y Matching][chap18]
- [Capítulo 19: Características Avanzadas][chap19]
- [Capítulo 20: Servidor Web Multithreaded][chap20]
- [Capítulo 21: Capítulo Extra: Programación Asincrónica][chap21]

[chap1]: ./ch01-getting-started.md "Capítulo 1: Comenzando"
[chap2]: ./ch02-guessing-game.md "Capítulo 2: Juego de Adivinanzas"
[chap3]: ./ch03-common-programming-concepts.md "Capítulo 3: Conceptos Comunes de Programación"
[chap4]: ./ch04-ownership.md "Capítulo 4: Ownership, Referencias y Slices"
[chap5]: ./ch05-structs.md "Capítulo 5: Usando Structs para Agrupar Datos Relacionados"
[chap6]: ./ch06-enums-and-pattern-matching.md "Capítulo 6: Enums y Pattern Matching"
[chap7]: ./ch07-packages-crates-modules.md "Capítulo 7: Gestionando Proyectos en Crecimiento con Paquetes, Crates y Módulos"
[chap8]: ./ch08-common-collections.md "Capítulo 8: Colecciones Comunes"
[chap9]: ./ch09-error-handling.md "Capítulo 9: Manejo de Errores"
[chap10]: ./ch10/ch10-01-generic-data-types.md "Capítulo 10: Tipos Genéricos, Traits y Lifetimes"
[chap11]: ./ch11-automated-tests.md "Capítulo 11: Escribiendo Tests Automatizados"
[chap12]: ./ch12-io-project-cli.md "Capítulo 12: Un Proyecto de I/O: Construyendo un Programa de Línea de Comandos"
[chap13]: ./ch13-functional-language-features.md "Capítulo 13: Características de Lenguajes Funcionales: Iteradores y Closures"
[chap14]: ./ch14-more-about-cargo.md "Capítulo 14: Más sobre Cargo y Crates.io"
[chap15]: ./ch15-smart-pointers.md "Capítulo 15: Smart Pointers"
[chap16]: ./ch16-fearless-concurrency.md "Capítulo 16: Concurrencia sin Miedo"
[chap17]: ./ch17-object-oriented-features.md "Capítulo 17: Características de Rust Orientadas a Objetos"
[chap18]: ./ch18-patterns-and-matching.md "Capítulo 18: Patterns y Matching"
[chap19]: ./ch19/ch19-01-unsafe.md "Capítulo 19: Características Avanzadas"
[chap20]: ./ch20/ch20-01-single-threaded-web-server.md "Capítulo 20: Servidor Web Multithreaded"
[chap21]: ./ch21-async.md "Capítulo 21: Capítulo Extra: Programación Asincrónica"

(Esta versión del libro está basada en [commit c06006 del libro original en inglés](https://github.com/rust-lang/book/commit/c06006157b14b3d47b5c716fc392b77f3b2e21ce)).

:::note Comentario del Traductor
¡Hola! Te agradezco por darle una oportunidad a este libro. Espero que tu experiencia sea muy satisfactoria. Quiero usar esta sección para hacer dos aclaraciones:

Primero, en la medida que hayan versiones en español completas de la información de referencia en el libro, las incluiré en vez de la referencias originales en inglés.

Segundo, si hay algún error o sugerencia en términos de la traducción de este material, no dudes en [informarlo a través de un issue en el repositorio de la traducción](https://github.com/jalejotorresm/rust-book-abridged).
:::
