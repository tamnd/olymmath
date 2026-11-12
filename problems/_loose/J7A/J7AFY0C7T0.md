---
tag: J7AFY0C7T0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1996 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h3354760
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28350
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1996 Tournament Of Towns
---
A game is played between two players on a $10 \times 10$ checkerboard. They move alternately, the first player marking $X$ s on vacant cells and the second $O$ s. When all $100$ cells have been marked, they calculate two numbers $C$ and $Z$ . $C$ is the total number of five consecutive $X$ s in a row, a column or a diagonal, so that $6$ consecutive $X$ s contribute a count of $2$ to $C$ , $7$ consecutive $X$ s contribute $3$ , and so on. Similarly, $Z$ is the total number of five consecutive Os. The first player wins if $C > Z$ , loses if $C < Z$ and draws if $C = Z$ . Does the first player have a strategy which guarantees
(a) a draw or a win
(b) a win
regardless of the counter-strategy of the second player?

(A Belov)
