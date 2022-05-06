<script>
    export let quote;
</script>

<figure>
    <blockquote>
        {quote.q}
    </blockquote>
    <figcaption>
        {quote.a}
    </figcaption>
</figure>

<style>
    * {
        text-align: center;
    }

    blockquote {
        position: relative;
        font-size: var(--font-500);
    }

    blockquote::before,
    blockquote::after {
        font-size: 1em;
        color: var(--color-primary);
        position: absolute;
        transform: scale(3);
        opacity: 0.8;
    }
    blockquote::before {
        content: open-quote;
        left: -.5em;
    }

    blockquote::after {
        content: close-quote;
        right: -.5em;
    }

    figcaption {
        font-size: var(--font-450);
        opacity: 0.75;
    }

    figcaption::before {
        content: '\2014 \00A0';
    }
</style>