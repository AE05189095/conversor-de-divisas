# Conversor de Divisas

Proyecto móvil/web creado con Ionic + Angular para convertir divisas.

## Descripción

Esta aplicación es un ejemplo de conversor de divisas construido con Ionic y Angular. Incluye la estructura típica de un proyecto Ionic, está preparada para desarrollo local con Angular CLI y para integrarse con Capacitor para publicar en dispositivos móviles.

## Tecnologías

- Ionic
- Angular (v20)
- Capacitor
- TypeScript

Las versiones principales se pueden ver en `package.json`.

## Requisitos

- Node.js (recomendado: 16+ o la versión LTS actual)
- npm
- Ionic CLI (opcional, para comandos de Ionic)

## Instalación

1. Clona el repositorio (si aún no lo hiciste):

```powershell
git clone <tu-repositorio-url>
cd conversor-de-divisas
```

2. Instala dependencias:

```powershell
npm install
```

## Scripts disponibles

Los scripts definidos en `package.json` son:

- `npm start` — Ejecuta `ng serve` para desarrollo local.
- `npm run build` — Compila la aplicación para producción (`ng build`).
- `npm run watch` — Compila en modo watch para desarrollo.
- `npm test` — Ejecuta los tests con Karma/Jasmine.
- `npm run lint` — Ejecuta linter (ESLint) para el código.

Puedes ejecutar cualquiera de ellos con `npm run <script>` o directamente `npm start`.

## Uso (desarrollo local)

Para ver la app en el navegador durante el desarrollo:

```powershell
npm start
# o, si tienes ionic instalado:
ionic serve
```

Abre `http://localhost:4200` y deberías ver la aplicación en ejecución.

## Preparar para dispositivos (Capacitor)

Si quieres construir y ejecutar en Android/iOS, instala Capacitor y sigue su guía para añadir plataformas:

```powershell
npm run build
npx cap add android
npx cap open android
```

O para iOS (macOS):

```powershell
npm run build
npx cap add ios
npx cap open ios
```

## Estructura del proyecto (resumen)

- `src/app/` — Código fuente de la aplicación (componentes y páginas).
- `src/assets/` — Recursos estáticos.
- `src/environments/` — Configuraciones por entorno.

## Contribuciones

Si deseas contribuir, crea un fork, haz un branch con tu cambio y abre un Pull Request. Describe claramente los cambios y añade capturas o pasos para probarlos si corresponde.

## Licencia

El proyecto está marcado como privado en `package.json`. Asegúrate de añadir la licencia que corresponda si decides hacerlo público.

---

Si quieres, puedo también:

- Añadir badges (build/ci) si tienes un CI configurado.
- Traducir o ampliar la sección de uso con capturas o ejemplos concretos.

Dime si quieres algún cambio en el README.
