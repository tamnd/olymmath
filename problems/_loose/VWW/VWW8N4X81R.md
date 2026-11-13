---
tag: VWW8N4X81R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1541554
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78601
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267448
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2017
    source: hf-ai-mo-aops
    label: 2017 Online Math Open Problems
---
We define the bulldozer of triangle $ABC$ as the segment between points $P$ and $Q$ , distinct points in the plane of $ABC$ such that $PA\cdot BC=PB\cdot CA=PC\cdot AB$ and $QA\cdot BC=QB\cdot CA=QC\cdot AB$ . Let $XY$ be a segment of unit length in a plane $\mathcal{P}$ , and let $\mathcal{S}$ be the region of $\mathcal P$ that the bulldozer of $XYZ$ sweeps through as $Z$ varies across the points in $\mathcal{P}$ satisfying $XZ=2YZ$ . Find the greatest integer that is less than $100$ times the area of $\mathcal S$ .

*Proposed by Michael Ren*
