---
tag: E02P2YWH9C
kind: problem
type: answer
answer: "6"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204895
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $10$ cups, each having $10$ pebbles in them. Two players $A$ and $B$ play a game, repeating the following in order each move:

$\bullet$ $B$ takes one pebble from each cup and redistributes them as $A$ wishes.

$\bullet$ After $B$ distributes the pebbles, he tells how many pebbles are in each cup to $A$. Then $B$ destroys all the cups having no pebbles.

$\bullet$ $B$ switches the places of two cups without telling $A$.

After finitely many moves, $A$ can guarantee that $n$ cups are destroyed. Find the maximum possible value of $n$.
(Note that $A$ doesn't see the cups while playing.)

*Proposed by Emre Osman*
