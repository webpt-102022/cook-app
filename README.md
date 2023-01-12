# Cook'app 🍱

> Welcome, developers! Vuestra tarea es desarrollar una aplicación en la que los usuarios puedan crear, consultar, actualizar y eliminar sus recetas favoritas. 

![](https://food.unl.edu/newsletters/images/mise-en-plase.jpg)

Tendréis que hacer este desarrollo en equipo, usando **git colaborativo**.

---

## Primer paso: instalación ✅

- Solo uno de los dos miembros del equipo se tiene que forkear el repo
- Le tiene que dar permiso al otro para editar 
- Ambos miembros se clonan el repositorio desde la misma cuenta de Github (la del miembro que se ha forkeado el repo)
- Después de clonarse el repo en sus ordenadores, ambos miembros, en sus ordenadores, cambian el nombre al documento `sample.env` por `.env`.

- Después, ambos miembros ejecutan:

```bash
npm install
```

- El repositorio ya tiene un modelo de receta creado y un `seed` preparado, para que ambos miembros tengan en su base de datos local algunas recetas con las que trabajar. ⚠️ _Debéis tener mongo arrancado en vuestros ordenadores para que el seed funcione_.

Ejecutad:

```bash
npm run seed
```

Comprobad que se han creado las recetas en Mongo Compass, en una base de datos llamada `cookApp`.

Ahora ambos miembros tenéis todo listo para empezar a desarrollar juntos. 

---

## Segundo paso: planificación 📝

Lo más importante en este punto es que decidáis qué váis a hacer. Coged papel y boli y decidid:

- ¿Qué pantallas va a tener la aplicación? Dibujad un pequeño wireframe de las pantallas básicas que tendrá la app.
- ¿Qué rutas necesitáis para hacer todo el CRUD completo? Podéis consultar todos los materiales que tenéis.
- ¿Cómo os lo podéis repartir? ¿Por dónde empezaríais cada un@?

---

## Tercer paso: coding time 💻

Es momento de poneros a hacer código. Lo mejor es que al principio hagáis un poco de pair programming y vayáis probando el flujo de git colaborativo. 




