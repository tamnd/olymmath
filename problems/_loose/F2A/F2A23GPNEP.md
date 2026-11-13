---
tag: F2A23GPNEP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Iran MO (3rd round)
    url: https://artofproblemsolving.com/community/c6h1140077
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12680
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214586
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2015
    source: hf-ai-mo-aops
    label: 2015 Iran MO (3rd round)
---
Let $p>5$ be a prime number and $A=\{b_1,b_2,\dots,b_{\frac{p-1}{2}}\}$ be the set of all quadratic residues modulo $p$ , excluding zero. Prove that there doesn't exist any natural $a,c$ satisfying $(ac,p)=1$ such that set $B=\{ab_1+c,ab_2+c,\dots,ab_{\frac{p-1}{2}}+c\}$ and set $A$ are disjoint modulo $p$ .

*This problem was proposed by Amir Hossein Pooya.*
