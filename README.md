# Mini Lista de Tareas (To-Do List)

**Autor:** Milton Andrade
**Materia:** Metodología de Desarrollo de Software (DAWA-202)
**Institución:** Instituto Superior Tecnológico La Troncal
**Proyecto:** Aplicación de metodología SCRUM sobre una aplicación web de lista de tareas

---

## 1. Descripción del proyecto

Aplicación web sencilla de "Lista de Tareas" (To-Do List) construida con HTML, CSS y JavaScript puro (sin frameworks), desarrollada aplicando el ciclo completo de SCRUM: Product Backlog, Sprint Planning, Sprint, Daily Scrum, Sprint Review y Sprint Retrospective.

## 2. Historias de usuario implementadas (Sprint 1)

| ID | Historia de Usuario | Prioridad | Puntos | Estado |
|----|----------------------|-----------|--------|--------|
| HU-01 | Como usuario quiero agregar una nueva tarea para registrar pendientes. | Alta | 3 | LISTO |
| HU-02 | Como usuario quiero marcar una tarea como completada para ver mi progreso. | Alta | 2 |LISTO|
| HU-03 | Como usuario quiero eliminar una tarea para quitar pendientes ya no vigentes. | Alta | 2 | LISTO |

> HU-04 (editar tarea) y HU-05 (filtrar tareas) quedan planificadas para un futuro Sprint 2.

## 3. Tablero SCRUM (Sprint 1)

<img width="1877" height="746" alt="image" src="https://github.com/user-attachments/assets/83bc9264-ef8d-4795-ac76-871dc8b5cab5" />
)
```


```

<img width="1546" height="752" alt="image" src="https://github.com/user-attachments/assets/cb13bf28-e6bb-42af-a1a7-da47f456a6d1" />
)
```

**Preguntas de análisis:**

- **¿El avance real estuvo por encima o por debajo de la línea ideal? ¿Por qué?**
  _(Escribe aquí tu respuesta según lo que muestre tu gráfico real, por ejemplo: "El avance real estuvo levemente por debajo de la línea ideal durante los primeros días, porque dediqué más tiempo a configurar el entorno de Jira y GitHub antes de empezar a codificar.")_

- **¿Hubo días sin avance? ¿A qué se debió?**
  _(Escribe aquí tu respuesta, por ejemplo: "Sí, un día no hubo avance debido a que tuve que resolver conflictos de merge en el repositorio de GitHub.")_

---

## 6. Paso 8 — Sprint Review y Retrospective

### Sprint Review (revisión del incremento)

Checklist de evaluación del resultado del Sprint 1:

- [x] Las historias HU-01, HU-02 y HU-03 funcionan correctamente en el navegador.
- [x] El código está subido a GitHub con commits por historia.
- [x] El pipeline de integración continua se ejecutó sin errores.

### Sprint Retrospective (mejora continua)

**Start (empezar a hacer):**
Incorporar la práctica de revisar y probar el archivo `ci.yml` localmente antes de subirlo a GitHub, para evitar errores de indentación en YAML que retrasan la ejecución del pipeline.

**Stop (dejar de hacer):**
Dejar de subir archivos con nombres o extensiones incorrectas (por ejemplo, `.txt` añadido automáticamente por el sistema operativo), ya que provoca que el workflow de CI falle al no encontrar los archivos esperados.

**Continue (seguir haciendo):**
Seguir haciendo commits pequeños y descriptivos por cada historia de usuario completada, ya que facilita el seguimiento del progreso y la trazabilidad de los cambios en GitHub.

---

## 7. Entregables

- Enlace al proyecto de Jira con el Product Backlog y el Sprint 1 completado.
- Captura del tablero SCRUM final.
- Enlace al repositorio de GitHub con el historial de commits.
- Evidencia de la ejecución del pipeline de integración continua.
- Captura del burndown chart final.
- Este archivo `README.md` con la documentación y la retrospectiva.
