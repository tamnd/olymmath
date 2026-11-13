---
tag: 7YFXNB68VR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Iran Team Selection Test
    url: https://artofproblemsolving.com/community/c6h84065
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44537
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240775
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-tst/2006
    source: hf-ai-mo-aops
    label: 2006 Iran Team Selection Test
---
Suppose that $p$ is a prime number.
Find all natural numbers $n$ such that $p|\varphi(n)$ and for all $a$ such that $(a,n)=1$ we have
$$ n|a^{\frac{\varphi(n)}{p}}-1 $$
