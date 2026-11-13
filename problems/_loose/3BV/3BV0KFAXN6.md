---
tag: 3BV0KFAXN6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h2828170
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54185
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247736
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2022
    source: hf-ai-mo-aops
    label: 2022 Romania National Olympiad
---
Let $f,g:\mathbb{R}\to\mathbb{R}$ be two nondecreasing functions.

- Show that for any $a\in\mathbb{R},$ $b\in[f(a-0),f(a+0)]$ and $x\in\mathbb{R},$ the following inequality holds $$\int_a^xf(t) \ dt\geq b(x-a).$$

- Given that $[f(a-0),f(a+0)]\cap[g(a-0),g(a+0)]\neq\emptyset$ for any $a\in\mathbb{R},$ prove that for any real numbers $a<b$ $$\int_a^b f(t) \ dt=\int_a^b g(t) \ dt.$$

*Note: $h(a-0)$ and $h(a+0)$ denote the limits to the left and to the right respectively of a function $h$ at point $a\in\mathbb{R}.$*
