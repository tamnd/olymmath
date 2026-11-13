---
tag: X8XATC1X1P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Iran MO (2nd Round)
    url: https://artofproblemsolving.com/community/c6h532792
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9663
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211657
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/2013
    source: hf-ai-mo-aops
    label: 2013 Iran MO (2nd Round)
---
Let $\{a_n\}_{n=1}^{\infty}$ be a sequence of positive integers for which
$$ a_{n+2} = \left[\frac{2a_n}{a_{n+1}}\right]+\left[\frac{2a_{n+1}}{a_n}\right]. $$
Prove that there exists a positive integer $m$ such that $a_m=4$ and $a_{m+1} \in\{3,4\}$ .**Note.** $[x]$ is the greatest integer not exceeding $x$ .
