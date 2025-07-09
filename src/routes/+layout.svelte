<script lang="ts">
  import "../app.css";
</script>

<header class="navbar">
  <a href="/" class="brand">
    Puridwen <span class="subtitle">— La bible de la guilde “Voleurs Fantôme”</span>
  </a>
</header>

<main class="content" style="flex:1;">
  <slot />
</main>

<footer class="footer">
  © 2025 Puridwen — Tous droits réservés
</footer>
