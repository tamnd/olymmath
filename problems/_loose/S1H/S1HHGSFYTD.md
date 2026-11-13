---
tag: S1HHGSFYTD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1993 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h57715
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25238
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225993
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/1993
    source: hf-ai-mo-aops
    label: 1993 IMO Shortlist
---
A circle $S$ bisects a circle $S'$ if it cuts $S'$ at opposite ends of a diameter. $S_A$ , $S_B$ , $S_C$ are circles with distinct centers $A, B, C$ (respectively).
Show that $A, B, C$ are collinear iff there is no unique circle $S$ which bisects each of $S_A$ , $S_B$ , $S_C$ . Show that if there is more than one circle $S$ which bisects each of $S_A$ , $S_B$ , $S_C$ , then all such circles pass through two fixed points. Find these points.

**Original Statement:**

A circle $S$ is said to cut a circle $\Sigma$ **diametrically** if and only if their common chord is a diameter of $\Sigma.$
Let $S_A, S_B, S_C$ be three circles with distinct centres $A,B,C$ respectively. Prove that $A,B,C$ are collinear if and only if there is no unique circle $S$ which cuts each of $S_A, S_B, S_C$ diametrically. Prove further that if there exists more than one circle $S$ which cuts each $S_A, S_B, S_C$ diametrically, then all such circles $S$ pass through two fixed points. Locate these points in relation to the circles $S_A, S_B, S_C.$
