---
tag: 639RXGNCH2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 USEMO
    url: https://artofproblemsolving.com/community/c6h3181742
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=74383
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263803
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: usemo/2023
    source: hf-ai-mo-aops
    label: 2023 USEMO
---
Canmoo is trying to do constructions, but doesn't have a ruler or compass. Instead, Canmoo has a device that, given four distinct points $A$ , $B$ , $C$ , $P$ in the plane, will mark the isogonal conjugate of $P$ with respect to triangle $ABC$ , if it exists. Show that if two points are marked on the plane, then Canmoo can construct their midpoint using this device, a pencil for marking additional points, and no other tools.

(Recall that the *isogonal conjugate* of $P$ with respect to triangle $ABC$ is the point $Q$ such that lines $AP$ and $AQ$ are reflections around the bisector of $\angle BAC$ , lines $BP$ and $BQ$ are reflections around the bisector of $\angle CBA$ , lines $CP$ and $CQ$ are reflections around the bisector of $\angle ACB$ . Additional points marked by the pencil can be assumed to be in general position, meaning they don't lie on any line through two existing points or any circle through three existing points.)

*Maxim Li*
