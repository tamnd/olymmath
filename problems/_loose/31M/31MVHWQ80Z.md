---
tag: 31MVHWQ80Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Taiwan TST Round 2
    url: https://artofproblemsolving.com/community/c6h598540
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61142
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253145
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2014
    source: hf-ai-mo-aops
    label: 2014 Taiwan TST Round 2
---
Let $P$ be a point inside triangle $ABC$ , and suppose lines $AP$ , $BP$ , $CP$ meet the circumcircle again at $T$ , $S$ , $R$ (here $T \neq A$ , $S \neq B$ , $R \neq C$ ). Let $U$ be any point in the interior of $PT$ . A line through $U$ parallel to $AB$ meets $CR$ at $W$ , and the line through $U$ parallel to $AC$ meets $BS$ again at $V$ . Finally, the line through $B$ parallel to $CP$ and the line through $C$ parallel to $BP$ intersect at point $Q$ . Given that $RS$ and $VW$ are parallel, prove that $\angle CAP = \angle BAQ$ .
