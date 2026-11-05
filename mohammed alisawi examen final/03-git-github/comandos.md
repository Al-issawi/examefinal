# Ejercicio Git y GitHub desde Git Bash

Sustituye la URL por la URL del repositorio público vacío que crees en GitHub.

## 2.1 Primer commit

En GitHub crea un repositorio público y vacío llamado `git-desde-GitBash`.

```bash
git clone https://github.com/USUARIO/git-desde-GitBash.git
cd git-desde-GitBash
echo "Primer archivo del examen" > info.txt
git add info.txt
git commit -m "Primer commit"
git push -u origin main
```

Si la rama local se llama `master`, puedes renombrarla antes del push:

```bash
git branch -M main
git push -u origin main
```

## 2.2 Segundo commit

Edita el archivo y guarda el cambio:

```bash
echo "Segundo cambio" >> info.txt
git add info.txt
git commit -m "Segundo commit"
git push
```

## 2.3 Tercer commit: rama2

```bash
git switch -c rama2
echo "Cambio realizado en rama2" >> info.txt
git add info.txt
git commit -m "Tercer commit en rama2"
git push -u origin rama2
```

## 2.4 Cuarto commit: rama3 y merge

Crea rama3 desde main:

```bash
git switch main
git switch -c rama3
echo "Cambio realizado en rama3" >> info.txt
git add info.txt
git commit -m "Cuarto commit en rama3"
git switch main
git merge rama2
git merge rama3
```

Si Git informa de conflictos, resuelve las marcas de conflicto en info.txt, guarda y ejecuta:

```bash
git add info.txt
git commit -m "Resolver conflicto de merge"
```

Sube main y rama3 si todavía no se han subido:

```bash
git push origin main
git push -u origin rama3
```

## 2.5 Integrar y limpiar ramas

Asegúrate de estar en main e integra las ramas:

```bash
git switch main
git merge rama2
git merge rama3
echo "Cambio final en la rama principal" >> info.txt
git add info.txt
git commit -m "Quinto commit en main"
git push origin main
git branch -d rama2
git branch -d rama3
git push origin --delete rama2
```

La instrucción del examen pide borrar rama2 en GitHub. El comando anterior la elimina del remoto.

## 2.6 Guardar logs e historial

Ejecuta desde la carpeta del repositorio:

```bash
git log > tuNombre_gitlog.txt
git log --oneline > tuNombre_gitlog_oneline.txt
history > tuNombre_historial.txt
```

En Git Bash, si no guardaste el historial durante la sesión, también puedes usar:

```bash
history 100 > tuNombre_historial.txt
```

Abre tuNombre_historial.txt y añade la URL del repositorio GitHub. Revisa los tres archivos antes de entregarlos.

## Comandos útiles

```bash
git status
git branch
git branch -a
git log --oneline --graph --all
git remote -v
```

No subas carpetas de dependencias como node_modules.
