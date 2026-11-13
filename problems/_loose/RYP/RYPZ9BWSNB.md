---
tag: RYPZ9BWSNB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Peru Iberoamerican Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3069135
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50475
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246109
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pe-ibero-tst/2010
    source: hf-ai-mo-aops
    label: 2010 Peru Iberoamerican Team Selection Test
---
Let $n$ be a positive integer. We know that the set $I_n = \{ 1, 2,\ldots , n\}$ has exactly $2^n$ subsets, so there are $8^n$ ordered triples $(A, B, C)$ , where $A, B$ , and $C$ are subsets of $I_n$ . For each of these triples we consider the number $\mid A \cap B \cap C\mid$ . Prove that the sum of the $8^n$ numbers considered is a multiple of $n$ . Clarification: $\mid Y\mid$ denotes the number of elements in the set $Y$ .
