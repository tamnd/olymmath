---
tag: VCY06FT8XD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 CMIMC
    url: https://artofproblemsolving.com/community/c6h1774522
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=17534
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219135
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2019
    source: hf-ai-mo-aops
    label: 2019 CMIMC
---
Consider the following three lines in the Cartesian plane: $$ \begin{cases}
\ell_1: & 2x - y = 7
\ell_2: & 5x + y = 42
\ell_3: & x + y = 14
\end{cases} $$ and let $f_i(P)$ correspond to the reflection of the point $P$ across $\ell_i$ . Suppose $X$ and $Y$ are points on the $x$ and $y$ axes, respectively, such that $f_1(f_2(f_3(X)))= Y$ . Let $t$ be the length of segment $XY$ ; what is the sum of all possible values of $t^2$ ?
