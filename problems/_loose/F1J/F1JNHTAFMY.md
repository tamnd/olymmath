---
tag: F1JNHTAFMY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1947263
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18160
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219735
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2019
    source: hf-ai-mo-aops
    label: 2019 Online Math Open Problems
---
Let $A$ , $B$ , $C$ , and $D$ be points in the plane with $AB=AC=BC=BD=CD=36$ and such that $A \neq D$ . Point $K$ lies on segment $AC$ such that $AK=2KC$ . Point $M$ lies on segment $AB$ , and point $N$ lies on line $AC$ , such that $D$ , $M$ , and $N$ are collinear. Let lines $CM$ and $BN$ intersect at $P$ . Then the maximum possible length of segment $KP$ can be expressed in the form $m+\sqrt{n}$ for positive integers $m$ and $n$ . Compute $100m+n$ .

*Proposed by James Lin*
