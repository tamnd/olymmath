---
tag: GAXCHNES3V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=100874
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If in $\triangle A B C$, $D, E, F$ are on sides $B C, C A, A B$ respectively, and
$$
\frac{B D}{D C}=p, \frac{C E}{E A}=q, \frac{A F}{F B}=r,
$$
$C F$ intersects $B E, A D$ at $P, Q$, and $B E$ intersects $A D$ at $R$, prove:
$$
\frac{S_{\triangle P Q R}}{S_{\triangle A B C}}=1-\frac{r}{r p+r+1}-\frac{p}{p q+p+1}-\frac{q}{q r+q+1} .
$$
