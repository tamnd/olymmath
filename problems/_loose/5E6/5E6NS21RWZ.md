---
tag: 5E6NS21RWZ
kind: problem
type: answer
answer: (n+1)!
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217057
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. Suppose that we have disks of radii $1, 2, . . . , n.$ Of each size there are two disks: a transparent one and an opaque one. In every disk there is a small hole in the centre, with which we can stack the
disks using a vertical stick. We want to make stacks of disks that satisfy the following conditions:
$i)$ Of each size exactly one disk lies in the stack.
$ii)$ If we look at the stack from directly above, we can see the edges of all of the $n$ disks in the stack. (So if there is an opaque disk in the stack,no smaller disks may lie beneath it.)
Determine the number of distinct stacks of disks satisfying these conditions.
(Two stacks are distinct if they do not use the same set of disks, or, if they do use the same set of disks and the orders in which the disks occur are different.)
