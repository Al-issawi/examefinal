# Git y GitHub

## 2.1 Primer commit

Crea en GitHub un repositorio público y vacío llamado git-desde-GitBash.

```bash
git clone https://github.com/USUARIO/git-desde-GitBash.git
cd git-desde-GitBash
echo "Primer archivo" > info.txt
git add info.txt
git commit -m "Primer commit"
git push -u origin main
```

## 2.2 Segundo commit

```bash
echo "Segundo cambio" >> info.txt
git add info.txt
git commit -m "Segundo commit"
git push
```

## 2.3 Tercer commit

```bash
git switch -c rama2
echo "Cambio en rama2" >> info.txt
git add info.txt
git commit -m "Tercer commit"
git push -u origin rama2
```

## 2.4 Cuarto commit

```bash
git switch main
git switch -c rama3
echo "Cambio en rama3" >> info.txt
git add info.txt
git commit -m "Cuarto commit"
git switch main
git merge rama2
git merge rama3
```

Si aparece un conflicto, corrige info.txt y ejecuta:

```bash
git add info.txt
git commit -m "Resolver merge"
```

## 2.5 Quinto commit

```bash
git switch main
git merge rama2
git merge rama3
echo "Cambio final" >> info.txt
git add info.txt
git commit -m "Quinto commit"
git push origin main
git branch -d rama2
git branch -d rama3
git push origin --delete rama2
```

## 2.6 Logs e historial

```bash
git log > tuNombre_gitlog.txt
git log --oneline > tuNombre_gitlog_oneline.txt
history > tuNombre_historial.txt
```

Añade al archivo de historial la URL del repositorio y revisa los tres archivos antes de entregarlos.
