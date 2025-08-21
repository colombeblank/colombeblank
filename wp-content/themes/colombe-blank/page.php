<?php get_header(); ?>

<main class="main-content">
    <div class="container" style="padding: 4rem 2rem;">
        <?php while (have_posts()) : the_post(); ?>
            <article class="page-content">
                <header class="page-header" style="margin-bottom: 2rem;">
                    <h1 style="font-family: 'Courier New', monospace; font-size: 24px; letter-spacing: 0.1em; margin-bottom: 1rem;"><?php the_title(); ?></h1>
                </header>
                
                <div class="page-body" style="font-family: 'Courier New', monospace; font-size: 14px; line-height: 1.6; max-width: 800px;">
                    <?php the_content(); ?>
                </div>
            </article>
        <?php endwhile; ?>
    </div>
</main>

<?php get_footer(); ?>