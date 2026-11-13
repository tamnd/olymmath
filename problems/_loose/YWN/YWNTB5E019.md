---
tag: YWNTB5E019
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 France Team Selection Test
    url: https://artofproblemsolving.com/community/c6h39063
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39061
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236393
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst/2005
    source: hf-ai-mo-aops
    label: 2005 France Team Selection Test
---
Let $X$ be a non empty subset of $\mathbb{N} = \{1,2,\ldots \}$ . Suppose that for all $x \in X$ , $4x \in X$ and $\lfloor \sqrt{x} \rfloor \in X$ . Prove that $X=\mathbb{N}$ .
