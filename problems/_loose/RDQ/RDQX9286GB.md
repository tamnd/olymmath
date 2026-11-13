---
tag: RDQX9286GB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h84391
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54560
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248061
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2006
    source: hf-ai-mo-aops
    label: 2006 Romania Team Selection Test
---
Let $p$ a prime number, $p\geq 5$ . Find the number of polynomials of the form
$$ x^p + px^k + p x^l + 1, k > l, k, l \in \left\{1,2,\dots,p-1\right\}, $$ which are irreducible in $\mathbb{Z}[X]$ .

*Valentin Vornicu*
