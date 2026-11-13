---
tag: NGDBH7APQX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h2378323
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19292
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220835
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2020
    source: hf-ai-mo-aops
    label: 2020 Online Math Open Problems
---
Let $ABC$ be a triangle such that $AB = 5$ , $AC = 8$ , and $\angle BAC = 60^{\circ}$ . Let $P$ be a point inside the triangle such that $\angle APB = \angle BPC = \angle CPA$ . Lines $BP$ and $AC$ intersect at $E$ , and lines $CP$ and $AB$ intersect at $F$ . The circumcircles of triangles $BPF$ and $CPE$ intersect at points $P$ and $Q \neq P$ . Then $QE + QF=\frac{m}{n}$ , where $m$ and $n$ are positive integers with $\gcd(m,n)=1$ . Compute $100m + n$ .

*Proposed by Ankan Bhattacharya*
