# Cook'app 🍱

> Welcome, developers! Sois un equipo de desarrollo y se os ha encomendado la tarea de desarrollar una aplicación en la que los usuarios puedan crear, consultar, actualizar y eliminar sus recetas favoritas. 

![](https://food.unl.edu/newsletters/images/mise-en-plase.jpg)

Tendréis que hacer este desarrollo en equipo, usando **git colaborativo**.

---

## Primer paso: instalación ✅

- Solo uno de los tres miembros del equipo se tiene que forkear el repo
- Le tiene que dar permiso a los otros dos para editar 
- Los 3 miembros se clonan el repositorio desde la misma cuenta de Github (la del miembro que se ha forkeado el repo)
- Después de clonarse el repo en sus ordenadores, los 3 miembros, en sus ordenadores, cambian el nombre al documento `sample.env` por `.env`.

- Después, todos los miembros ejecutan:

```bash
npm install
```

- El repositorio ya tiene un modelo de receta creado y un `seed` preparado, para que tengáis en vuestra base de datos local algunas recetas con las que trabajar. ⚠️ _Debéis tener mongo arrancado en vuestros ordenadores para que el seed funcione_.

Ejecutad:

```bash
npm run seed
```

Comprobad que se han creado las recetas en Mongo Compass, en una base de datos llamada `cookApp`.

Ahora tenéis todo listo para empezar a desarrollar junt@s. 

---

## Segundo paso: entender requisitos 🧐

- El usuario debe poder ver las recetas
- El usuario debe poder crear una nueva receta
- El usuario debe poder editar una receta de las que ya existen
- El usuario debe poder eliminar una receta de las que ya existen

BONUS:
- El usuario debe poder hacer un comentario a una receta

---
## Tercer paso: planificación 📝

Lo más importante en este punto es que decidáis qué váis a hacer. Coged papel y boli (o excalidraw o cualquier programa que os resulte cómodo) y decidid:

- ¿Qué pantallas va a tener la aplicación? Dibujad un pequeño wireframe de las pantallas básicas que tendrá la app. 
- ¿Qué rutas necesitáis para hacer todo el CRUD completo? Podéis consultar todos los materiales que tenéis.
- ¿Cómo os lo podéis repartir? ¿Por dónde empezaríais cada un@? Se trata de que lleguéis tan lejos como podáis en el rato que tenéis.
- Explorad los archivos que ya vienen, la estructura y haced una lista de todo lo que falta. Os ayudará en el desarrollo.
- Los comentarios deben estar relacionados con la receta: ¿cómo gestionaréis esa relación?

---

## Tercer paso: coding time 💻

Es momento de poneros a hacer código. Lo mejor es que al principio hagáis un poco de pair programming y vayáis probando el flujo de git colaborativo hasta que veáis que tenéis el ritmo cogido y os podáis centrar en hacer cada uno vuestras rutas, vistas, estilos, etc.

### Remember the branches 🌱

Recordad que el desarrollo se hace en la rama `dev`. La rama dev ya viene creado. Moveros a ella (`git checkout dev`) antes de crear vuestras ramas de feature.

La chuleta del proceso es la siguiente:

```bash
## cuando empiezo, me sitúo en dev
git pull origin dev # compruebo si mi compañer@ ha hecho algo
git checkout -b feat/name # me creo la rama y me voy a ella
## trabajo. cuando acabo:
git status
git add .
git commit -m "commit explaining feature"
git push origin feat/name  # si quiero subir la rama a github para tener la copia ahí, este paso es opcional
git checkout dev  # me voy a la rama compartida
git pull origin dev # vuelvo a comprobar si mi compañer@ ha hecho cambios mientras yo trabajaba
git merge feat/name # me traigo los cambios que he hecho yo a la rama dev y si hay conflictos los arreglo
git commit -m "merges feat/name into dev" # guardo los cambios
git push origin dev # subo los cambios a github para que se los pueda descargar mi compañer@
```





