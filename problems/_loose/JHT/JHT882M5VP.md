---
tag: JHT882M5VP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231779
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's consider words over the alphabet $\{a,b\}$ to be sequences of $a$ and $b$ with finite length. We say $u \leq v$ if $u$ is a subword of $v$ if we can get $u$ erasing some letter of $v$ (for example $aba \leq abbab$). We say that $u$ differentiates the words $x$ and $y$ if $u \leq x$ but $u \not\leq y$ or vice versa.

Let $m$ and $l$ be positive integers. We say that two words are $m-$equivalents if there does not exist some $u$ with length smaller than $m$ that differentiates $x$ and $y$.

a) Show that, if $2m \leq l$, there exists two distinct words with length $l$ \ $m-$equivalents.
b) Show that, if $2m > l$, any two distinct words with length $l$ aren't $m-$equivalent.
