# PRD — Objetos que hablan

## 1. Información general

**Nombre del producto:** Objetos que hablan  
**Tipo de producto:** Webdoc interactivo guiado por objetos  
**Formato:** Experiencia web multimedia e interactiva  
**Concepto central:** Un juguete → infancia → fotografías → recuerdos  
**Versión:** 1.0 — Prototipo académico  
**Área:** Diseño Hipermedia  

---

## 2. Resumen del producto

**Objetos que hablan** es un Webdoc interactivo que explora la relación entre los objetos de la infancia y la memoria personal.

La experiencia parte de un objeto cotidiano, específicamente un juguete, y utiliza ese elemento como puerta de entrada hacia una historia. Al interactuar con el juguete, el usuario descubre fotografías, testimonios, sonidos, textos y otros recuerdos asociados a una etapa de la vida.

El objetivo no es simplemente mostrar fotografías antiguas, sino permitir que el usuario **descubra una historia a través de los objetos que la contienen**.

La narrativa se construye mediante una navegación no lineal y exploratoria, donde cada objeto funciona como un fragmento de memoria.

---

# 3. Problema

Los recuerdos de la infancia suelen estar asociados a objetos que, con el paso del tiempo, pierden su función original pero conservan un fuerte valor emocional.

Sin embargo, estos objetos normalmente se presentan como elementos estáticos: una fotografía de un juguete, una caja guardada o un objeto almacenado.

El proyecto busca transformar esa relación en una experiencia digital interactiva donde el objeto se convierta en un **mediador narrativo**.

### Problema central

¿Cómo podemos utilizar un juguete como punto de entrada para reconstruir y explorar recuerdos de la infancia mediante una experiencia web interactiva?

---

# 4. Oportunidad

Existe una oportunidad de utilizar las posibilidades del diseño hipermedia para convertir recuerdos personales en una experiencia participativa.

En lugar de presentar una historia de manera lineal, el Webdoc permitirá que el usuario:

- Explore un espacio.
- Encuentre objetos.
- Interactúe con ellos.
- Descubra fotografías.
- Escuche testimonios.
- Relacione diferentes recuerdos.
- Construya progresivamente el significado de la historia.

Esto convierte al usuario en un **explorador de la memoria**.

---

# 5. Objetivo general

Diseñar y prototipar un Webdoc interactivo en el que un juguete funcione como elemento narrativo principal para explorar recuerdos de infancia mediante fotografías, audio, texto e interacción.

## 5.1 Objetivos específicos

1. Convertir un juguete en una puerta de entrada narrativa.
2. Relacionar objetos físicos con fotografías y recuerdos personales.
3. Diseñar una navegación interactiva que fomente la exploración.
4. Integrar diferentes formatos multimedia dentro de una misma narrativa.
5. Generar una experiencia emocional alrededor de la memoria y la nostalgia.
6. Probar la comprensión y facilidad de uso del concepto mediante un prototipo funcional.

---

# 6. Concepto

## Concepto creativo

> **Los objetos no guardan recuerdos: nos ayudan a encontrarlos.**

El juguete funciona como un disparador de memoria.

El usuario comienza viendo el objeto en el presente y, mediante la interacción, descubre capas de información relacionadas con su pasado.

### Recorrido conceptual

```text
JUGUETE
   ↓
INFANCIA
   ↓
FOTOGRAFÍAS
   ↓
RECUERDOS
   ↓
HISTORIA PERSONAL
```

Cada etapa revela una nueva capa narrativa.

---

# 7. Público objetivo

## Público principal

Jóvenes y adultos jóvenes interesados en:

- Historias personales.
- Fotografía.
- Cultura digital.
- Memoria e identidad.
- Experiencias web interactivas.
- Narrativas audiovisuales.

## Perfil del usuario

Un usuario que consume contenido digital principalmente en computador o celular y que está familiarizado con interfaces interactivas.

No necesita conocimientos técnicos previos.

---

# 8. Propuesta de valor

**Objetos que hablan** transforma un objeto cotidiano de la infancia en una experiencia narrativa interactiva.

En lugar de decirle al usuario qué recordar, el Webdoc le permite **descubrir una historia a partir de sus pistas**.

### Diferenciadores

- La historia se organiza alrededor de objetos.
- La interacción es parte de la narrativa.
- Las fotografías funcionan como evidencia y memoria.
- El audio aporta una dimensión emocional.
- La navegación permite descubrir conexiones progresivamente.
- El objeto funciona como protagonista narrativo.

---

# 9. Experiencia del usuario

## 9.1 Inicio

El usuario entra a un espacio visual relacionado con la infancia.

Puede ser:

- Una habitación.
- Una caja de recuerdos.
- Un cuarto infantil.
- Un escritorio.
- Un espacio aparentemente abandonado.

En el centro se encuentra el juguete principal.

### Primera interacción

El usuario reconoce el juguete y descubre que puede interactuar con él.

Al pasar el cursor o tocarlo:

- Se ilumina.
- Produce un sonido.
- Aparece una pequeña pista.
- Cambia visualmente.

Ejemplo:

> “¿Recuerdas dónde estaba cuando lo viste por primera vez?”

---

# 10. Recorrido narrativo

## Etapa 1 — El juguete

El usuario encuentra el juguete.

### Contenido

- Fotografía actual del juguete.
- Nombre o descripción.
- Breve texto.
- Sonido opcional.
- Animación.

### Objetivo

Generar curiosidad.

---

## Etapa 2 — La infancia

Al interactuar con el juguete aparece información relacionada con la infancia.

### Contenido

- Fotografías de la época.
- Fragmentos de texto.
- Fechas.
- Lugares.
- Pequeños testimonios.

### Objetivo

Contextualizar el objeto dentro de una experiencia personal.

---

## Etapa 3 — Las fotografías

Una fotografía se convierte en el siguiente punto de exploración.

El usuario puede:

- Hacer zoom.
- Explorar detalles.
- Seleccionar personas u objetos.
- Abrir información adicional.
- Comparar pasado y presente.

### Ejemplo

El usuario toca una fotografía y descubre:

> “Esta fotografía fue tomada durante una celebración familiar.”

Después puede aparecer una segunda pista relacionada con otro recuerdo.

---

## Etapa 4 — Los recuerdos

La experiencia profundiza en el significado emocional del juguete.

### Contenido posible

- Audio de una persona contando el recuerdo.
- Texto narrativo.
- Música.
- Sonidos ambientales.
- Fotografía.
- Video corto.

### Objetivo

Pasar de la información factual a la experiencia emocional.

---

# 11. Arquitectura de información

```text
INICIO
│
├── JUGUETE
│   ├── Información
│   ├── Sonido
│   └── Pista
│
├── INFANCIA
│   ├── Fotografías
│   ├── Fechas
│   ├── Lugares
│   └── Contexto
│
├── FOTOGRAFÍAS
│   ├── Zoom
│   ├── Detalles
│   ├── Personas
│   └── Nuevas pistas
│
└── RECUERDOS
    ├── Testimonio
    ├── Audio
    ├── Video
    └── Cierre
```

---

# 12. Mecánica principal de interacción

La interacción principal será:

> **Explorar → encontrar → interactuar → descubrir → conectar**

El usuario no recibirá toda la historia de una vez.

Cada elemento descubierto podrá desbloquear otro contenido.

### Ejemplo

```text
Juguete
   ↓
Fotografía
   ↓
Persona
   ↓
Recuerdo
   ↓
Audio
   ↓
Otra fotografía
   ↓
Nueva conexión
```

---

# 13. Funcionalidades

## 13.1 Funcionalidades esenciales — MVP

### F1. Exploración del espacio

El usuario debe poder explorar visualmente la escena inicial.

### F2. Interacción con el juguete

El juguete debe responder al usuario mediante:

- Hover.
- Click/tap.
- Animación.
- Sonido.

### F3. Visor de fotografías

Debe permitir:

- Abrir fotografía.
- Ampliarla.
- Cerrar fotografía.
- Seleccionar detalles.

### F4. Contenido multimedia

El sistema debe poder mostrar:

- Texto.
- Imágenes.
- Audio.
- Video corto.

### F5. Navegación narrativa

Cada descubrimiento debe conducir a otra pieza de contenido.

### F6. Indicadores de descubrimiento

El usuario debe poder reconocer:

- Qué elementos ya exploró.
- Qué contenido todavía puede descubrir.

---

# 14. Funcionalidades deseables

Estas funcionalidades pueden incorporarse después del MVP:

- Comparación entre fotografía antigua y fotografía actual.
- Línea temporal.
- Mapa del recuerdo.
- Animaciones del juguete.
- Sonidos interactivos.
- Múltiples juguetes.
- Finales narrativos alternativos.
- Participación del usuario mediante un recuerdo propio.

---

# 15. Requisitos funcionales

| ID | Requisito | Prioridad |
|---|---|---|
| RF-01 | El usuario debe poder ingresar al Webdoc desde una pantalla inicial. | Alta |
| RF-02 | El sistema debe presentar un juguete como elemento principal. | Alta |
| RF-03 | El juguete debe permitir interacción directa. | Alta |
| RF-04 | La interacción con el juguete debe desbloquear contenido. | Alta |
| RF-05 | El sistema debe mostrar fotografías relacionadas con el recuerdo. | Alta |
| RF-06 | El usuario debe poder ampliar las fotografías. | Media |
| RF-07 | El sistema debe permitir reproducir audio. | Alta |
| RF-08 | El sistema debe permitir visualizar video corto. | Media |
| RF-09 | El contenido debe estar conectado mediante navegación hipermedia. | Alta |
| RF-10 | El usuario debe poder regresar a contenidos previamente explorados. | Alta |
| RF-11 | El sistema debe indicar el progreso de exploración. | Media |
| RF-12 | La experiencia debe finalizar con una conclusión narrativa. | Alta |

---

# 16. Requisitos no funcionales

### RNF-01 — Usabilidad

La interfaz debe ser comprensible sin instrucciones extensas.

### RNF-02 — Accesibilidad

Los elementos interactivos deben tener indicadores visuales claros.

Los contenidos de audio y video deben disponer de alternativas textuales cuando sea posible.

### RNF-03 — Rendimiento

Las fotografías, videos y audios deben estar optimizados para reducir tiempos de carga.

### RNF-04 — Responsive

La experiencia debe adaptarse a:

- Computador.
- Tablet.
- Celular.

### RNF-05 — Consistencia visual

La interfaz debe mantener una identidad visual coherente con el concepto de infancia y memoria.

---

# 17. Dirección visual

## Concepto visual

La estética debe combinar:

**Infancia + memoria + nostalgia + archivo personal.**

### Recursos visuales posibles

- Fotografías antiguas.
- Texturas de papel.
- Polaroids.
- Álbumes familiares.
- Cajas de recuerdos.
- Objetos físicos digitalizados.
- Escritura manuscrita.
- Sombras suaves.
- Animaciones lentas.
- Efectos de desenfoque o enfoque.

### Principio visual

El pasado y el presente deben diferenciarse visualmente, pero permanecer conectados.

Ejemplo:

**Presente:** objeto fotografiado con iluminación limpia.

**Pasado:** fotografías con textura, grano y composición de archivo.

---

# 18. Diseño sonoro

El sonido será un elemento narrativo y no solamente decorativo.

### Posibles sonidos

- Juguete activándose.
- Risas infantiles.
- Sonidos de una habitación.
- Páginas pasando.
- Cámara fotográfica.
- Música asociada a la época.
- Voz del narrador o protagonista.

### Objetivo

Utilizar el sonido para reforzar la sensación de recuerdo y presencia.

---

# 19. Narrativa

La narrativa debe seguir una progresión:

### 1. Curiosidad

“¿Qué es este objeto?”

### 2. Descubrimiento

“¿Por qué es importante?”

### 3. Contexto

“¿Qué ocurrió alrededor de él?”

### 4. Emoción

“¿Qué significa para la persona?”

### 5. Reflexión

“¿Qué queda de ese recuerdo en el presente?”

---

# 20. MVP

La primera versión funcional no necesita contar toda la historia.

Debe demostrar que el concepto funciona.

## MVP mínimo

El prototipo tendrá:

1. Una pantalla de inicio.
2. Un espacio visual.
3. Un juguete principal.
4. Una interacción con el juguete.
5. Tres fotografías.
6. Un fragmento de texto.
7. Un audio testimonial.
8. Una conexión entre contenidos.
9. Una pantalla de cierre.

### Flujo MVP

```text
INICIO
  ↓
HABITACIÓN
  ↓
JUGUETE
  ↓
FOTOGRAFÍA 1
  ↓
FOTOGRAFÍA 2
  ↓
AUDIO / TESTIMONIO
  ↓
RECUERDO
  ↓
CIERRE
```

---

# 21. User Journey

| Etapa | Acción del usuario | Estado emocional | Resultado |
|---|---|---|---|
| Descubrimiento | Entra al sitio | Curiosidad | Identifica el juguete |
| Exploración | Interactúa con el juguete | Intriga | Aparece una pista |
| Descubrimiento | Abre una fotografía | Nostalgia | Conoce el contexto |
| Investigación | Explora detalles | Interés | Encuentra una conexión |
| Inmersión | Escucha el testimonio | Emoción | Comprende el recuerdo |
| Cierre | Recuerda el significado | Reflexión | Comprende la historia |

---

# 22. Historia de usuario

### Historia principal

> Como usuario, quiero explorar un juguete de infancia y descubrir las fotografías y recuerdos asociados a él para comprender la historia que representa.

### Historias secundarias

> Como usuario, quiero interactuar con los objetos para descubrir información adicional.

> Como usuario, quiero explorar fotografías para encontrar detalles relacionados con la historia.

> Como usuario, quiero escuchar testimonios para conocer el significado emocional del recuerdo.

---

# 23. Métricas de éxito del prototipo

El prototipo podrá considerarse exitoso si:

- El usuario entiende que el juguete es interactivo.
- El usuario descubre al menos tres contenidos sin ayuda.
- El usuario comprende la relación entre juguete, fotografías y recuerdos.
- La navegación no genera confusión.
- El usuario identifica una evolución narrativa.
- La experiencia genera interés emocional.

### Indicadores de prueba

**Tasa de interacción con el juguete**

Objetivo: > 80 %

**Usuarios que completan el recorrido**

Objetivo: > 70 %

**Usuarios que comprenden la narrativa**

Objetivo: > 80 %

---

# 24. Pruebas de usuario

Para validar el prototipo se propone realizar pruebas con 5 a 10 personas.

### Preguntas

1. ¿Qué creíste que debías hacer al entrar?
2. ¿Identificaste el juguete como un elemento interactivo?
3. ¿Entendiste cómo pasar de una fotografía a otra?
4. ¿La historia te resultó fácil de seguir?
5. ¿Qué parte te generó mayor interés?
6. ¿En algún momento no supiste qué hacer?
7. ¿Qué mejorarías de la experiencia?

---

# 25. Tecnologías posibles

## Prototipado

- Figma.
- Adobe XD.
- Framer.

## Desarrollo web

- HTML.
- CSS.
- JavaScript.

## Animación

- GSAP.
- CSS animations.

## Audio

- HTML Audio.
- Web Audio API.

## Multimedia

- HTML5 Video.
- Imágenes optimizadas para web.

---

# 26. Alcance

## Incluido

- Diseño de interfaz.
- Diseño de interacción.
- Una historia principal.
- Un juguete.
- Fotografías.
- Audio.
- Texto.
- Navegación hipermedia.
- Prototipo funcional.

## Fuera del alcance inicial

- Sistema multiusuario.
- Base de datos compleja.
- Inteligencia artificial.
- Realidad aumentada.
- Sistema de cuentas.
- Carga de recuerdos por usuarios externos.

Estas características pueden evaluarse en futuras versiones.

---

# 27. Riesgos

| Riesgo | Impacto | Mitigación |
|---|---|---|
| Exceso de contenido | Alto | Limitar el MVP |
| Navegación confusa | Alto | Diseñar señales visuales |
| Archivos multimedia pesados | Medio | Optimización |
| Historia poco clara | Alto | Probar con usuarios |
| Interacciones poco intuitivas | Alto | Realizar pruebas tempranas |
| Estética demasiado infantil | Medio | Utilizar nostalgia en lugar de diseño infantil genérico |

---

# 28. Roadmap

## Fase 1 — Ideación

- Definir historia.
- Seleccionar juguete.
- Identificar recuerdos.
- Seleccionar fotografías.
- Definir tono visual.

## Fase 2 — Diseño

- Wireframes.
- Arquitectura de información.
- Diseño de interacción.
- Identidad visual.

## Fase 3 — Prototipo

- Construcción de pantalla inicial.
- Integración del juguete.
- Integración de fotografías.
- Integración de audio.
- Implementación de navegación.

## Fase 4 — Pruebas

- Test con usuarios.
- Identificación de problemas.
- Ajustes de navegación.
- Ajustes visuales.

## Fase 5 — Presentación

- Prototipo final.
- Explicación del concepto.
- User Journey.
- Arquitectura de navegación.
- Evidencia de pruebas.

---

# 29. Criterios de aceptación del MVP

El MVP se considera terminado cuando:

- [ ] Existe una pantalla de inicio funcional.
- [ ] El juguete es identificable como elemento interactivo.
- [ ] Al interactuar con él aparece contenido narrativo.
- [ ] Se pueden visualizar al menos tres fotografías.
- [ ] Existe al menos un contenido de audio.
- [ ] Los contenidos están conectados entre sí.
- [ ] El usuario puede regresar a contenidos anteriores.
- [ ] Existe una pantalla de cierre.
- [ ] La experiencia funciona correctamente en un navegador.
- [ ] Se realizaron pruebas con usuarios.

---

# 30. Resultado esperado

El resultado final será un Webdoc en el que el usuario no simplemente observa recuerdos, sino que **los descubre a través de un objeto**.

El juguete funcionará como el primer fragmento de una historia que conecta:

```text
OBJETO
   ↓
INFANCIA
   ↓
FOTOGRAFÍA
   ↓
PERSONA
   ↓
RECUERDO
   ↓
EMOCIÓN
```

La intención es que al terminar la experiencia el usuario comprenda que un objeto aparentemente cotidiano puede convertirse en un archivo de memoria y que, al explorarlo, es posible reconstruir una historia personal.
