---
tag: WCGEE7V7K4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1992 Iran MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h379820
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44022
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240295
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/1992
    source: hf-ai-mo-aops
    label: 1992 Iran MO (2nd round)
---
Let $X \neq \varnothing$ be a finite set and let $f: X \to X$ be a function such that for every $x \in X$ and a fixed prime $p$ we have $f^p(x)=x.$ Let $Y=\{x \in X | f(x) \neq x\}.$ Prove that the number of the members of the set $Y$ is divisible by $p.$ *Note.* ${f^p(x)=x = \underbrace{f(f(f(\cdots ((f}_{ p \text{ times}}(x) ) \cdots )))} .$
