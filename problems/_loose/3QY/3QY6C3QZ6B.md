---
tag: 3QY6C3QZ6B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h108204
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44291
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240564
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2006
    source: hf-ai-mo-aops
    label: 2006 Iran MO (3rd Round)
---
$n$ is a natural number. $d$ is the least natural number that for each $a$ that $gcd(a,n)=1$ we know $a^{d}\equiv1\pmod{n}$ . Prove that there exist a natural number that $\text{ord}_{n}b=d$
