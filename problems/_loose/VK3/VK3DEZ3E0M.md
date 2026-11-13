---
tag: VK3DEZ3E0M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 Iran MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h375035
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44076
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240349
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/2002
    source: hf-ai-mo-aops
    label: 2002 Iran MO (2nd round)
---
Let $\delta$ be a symbol such that $\delta \neq 0$ and $\delta^2 = 0$ . Define $\mathbb R[\delta] = \{a + b \delta | a, b \in \mathbb R\}$ , where $a+ b \delta = c+ d \delta$ if and only if $a = c$ and $b = d$ , and define
$$(a + b \delta) + (c + d \delta) = (a + c) + (b + d) \delta,$$$$(a + b \delta) \cdot (c + d \delta) = ac + (ad + bc) \delta.$$
Let $P(x)$ be a polynomial with real coefficients. Show that $P(x)$ has a multiple real root if and only if $P(x)$ has a non-real root in $\mathbb R[\delta].$
