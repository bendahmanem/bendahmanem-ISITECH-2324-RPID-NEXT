## Présentation de Next.js

Next.js est un framework pour React, conçu pour la production et l'efficacité. Il offre plusieurs avantages :

**Server-Side Rendering (SSR)** : Next.js permet le rendu côté serveur des pages web, ce qui améliore la performance et le SEO.
**Static Site Generation (SSG)** : Possibilité de générer des sites statiques pour une vitesse de chargement rapide.
Routing Automatique : Les fichiers dans le dossier pages deviennent automatiquement des routes.
**Optimisation des Performances** : Next.js inclut des fonctionnalités comme l'optimisation automatique des images.
Facilité de Déploiement : Intégration simple avec des plateformes comme Vercel pour un déploiement rapide.

## Installation et Configuration de Base

Pour installer Next.js, vous pouvez utiliser `npx create-next-app` ou `yarn create next-app`. Vous pouvez aussi utiliser `npm init next-app` ou `yarn create next-app` pour créer un projet Next.js à partir de zéro.

Pour ce cours, nous allons utiliser `npx create-next-app` pour créer un projet Next.js à partir d'un template. Pour cela, exécutez la commande suivante dans votre terminal :

```bash

npx create-next-app --example with-tailwindcss nextjs-course

```

Cette commande va créer un nouveau dossier nextjs-course avec un projet Next.js préconfiguré avec Tailwind CSS. Vous pouvez ensuite ouvrir le dossier dans votre éditeur de code favori.

Pour lancer le projet, exécutez la commande suivante :

```bash

cd nextjs-course
npm run dev

```

Vous pouvez ensuite ouvrir http://localhost:3000 pour voir le résultat.

## Structure de Projet Next.js 14

La structure de projet par défaut de Next.js 14 est la suivante :

```bash

```

## Routing de Base avec Next.js

Le routing de base avec Next.js est très simple. Il suffit de créer un fichier dans le dossier pages avec le nom de la route. Par exemple, pour créer une page à l'adresse `/about`, il suffit de créer un fichier `about.js` dans le dossier pages.

![Alt text](image.png)

Vocabulaire du systeme de routing de Next.js :

- **Tree** (arbre): Un arbre est une structure de données qui représente une hiérarchie. Dans Next.js, l'arborescence des fichiers dans le dossier pages représente l'arborescence des routes.
- **Subtree**: Un sous-arbre est un arbre qui fait partie d'un arbre plus grand. Dans Next.js, un sous-arbre est un dossier qui fait partie de l'arborescence des fichiers dans le dossier pages.
- **Root**: La racine est le dossier le plus haut dans l'arborescence des fichiers. Dans Next.js, le dossier pages est la racine de l'arborescence des fichiers.
- **Leaf**: Une feuille est un nœud qui n'a pas d'enfants. Dans Next.js, un fichier dans le dossier pages est une feuille.

La presence du dossier pages est obligatoire dans un projet Next.js. Si vous supprimez ce dossier, vous empecher le bon fonctionnement du router.

Par defaut tous les composants situes dans le dossier app sont des `React Server Components`.

En resumé:

- Les dossiers permettent de definir les routes
- Les fichiers permettent de representer l'ui

Il existe tout un systeme de nomenclature des fichiers et de conventions afin d'assurer le bon fonctionnement du router:

- **layout**: permet de definir une UI commune pour plusieurs pages
- **page**: l'ui qui correspond a une route unique
- **loading**: la page de chargement commune a un segment et ses enfants
- **error**: ui en cas d'erreur
- **not-found**: ui lorsque la page n'est pas trouvee

### Navigation entre les pages

Il existe deux facons de naviguer entre les pages dans Next.js :

- Le composant **Link**: permet de naviguer entre les pages sans recharger la page:

```ts
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
```

Link est un composant fourni par Next.

- **Le hook useRouter**: permet de naviguer depuis un composant client par le code (l'usage de hook requiert l'urilisation de la directive 'use client')

Il existe un hook tres utile qui permet de verifier quel est le chemin actuel de l'application: usePathname

```ts
import { usePathname } from "next/router";

export default function Page() {
  const pathname = usePathname();
  return <div>Current path: {pathname}</div>;
}
```

## Consignes TP

A partir du projet fourni, mettez en place une api avec Next.js et expliquez comment elle fonctionne :

- decrivez le systeme de fichier et les conventions de nommage.
- mettez en place au moins une route
