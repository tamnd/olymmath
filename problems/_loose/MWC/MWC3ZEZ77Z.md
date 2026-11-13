---
tag: MWC3ZEZ77Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 Iran MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h369924
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44050
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240323
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/1998
    source: hf-ai-mo-aops
    label: 1998 Iran MO (2nd round)
---
Let $ABC$ be a triangle and $AB<AC<BC$ . Let $D,E$ be points on the side $BC$ and the line $AB$ , respectively ( $A$ is between $B,E$ ) such that $BD=BE=AC$ . The circumcircle of $\Delta BED$ meets the side $AC$ at $P$ and $BP$ meets the circumcircle of $\Delta ABC$ at $Q$ . Prove that:
$$ AQ+CQ=BP. $$
