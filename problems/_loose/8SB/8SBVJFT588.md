---
tag: 8SBVJFT588
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h90046
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25506
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226277
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/2005
    source: hf-ai-mo-aops
    label: 2005 IMO Shortlist
---
There are $ n$ markers, each with one side white and the other side black. In the beginning, these $ n$ markers are aligned in a row so that their white sides are all up. In each step, if possible, we choose a marker whose white side is up (but not one of the outermost markers), remove it, and reverse the closest marker to the left of it and also reverse the closest marker to the right of it. Prove that, by a finite sequence of such steps, one can achieve a state with only two markers remaining if and only if $ n - 1$ is not divisible by $ 3$ .

*Proposed by Dusan Dukic, Serbia*
