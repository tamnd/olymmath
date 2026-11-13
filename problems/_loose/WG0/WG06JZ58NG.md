---
tag: WG06JZ58NG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1993 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h2009055
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54375
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247875
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/1993
    source: hf-ai-mo-aops
    label: 1993 Romania Team Selection Test
---
Let $Y$ be the family of all subsets of $X = \{1,2,...,n\}$ ( $n > 1$ ) and let $f : Y \to X$ be an arbitrary mapping. Prove that there exist distinct subsets $A,B$ of $X$ such that $f(A) = f(B) = max A\triangle B$ , where $A\triangle B = (A-B)\cup(B-A)$ .
