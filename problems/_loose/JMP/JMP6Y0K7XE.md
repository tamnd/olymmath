---
tag: JMP6Y0K7XE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h53042
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42211
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238796
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2004
    source: hf-ai-mo-aops
    label: 2004 India IMO Training Camp
---
A set $A_1 , A_2 , A_3 , A_4$ of 4 points in the plane is said to be *Athenian* set if there is a point $P$ of the plane satsifying

(*) $P$ does not lie on any of the lines $A_i A_j$ for $1 \leq i < j \leq 4$ ;
(**) the line joining $P$ to the mid-point of the line $A_i A_j$ is perpendicular to the line joining $P$ to the mid-point of $A_k A_l$ , $i,j,k,l$ being distinct.

(a) Find all *Athenian* sets in the plane.
(b) For a given *Athenian* set, find the set of all points $P$ in the plane satisfying (*) and (**)
