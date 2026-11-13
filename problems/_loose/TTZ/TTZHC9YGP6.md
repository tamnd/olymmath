---
tag: TTZHC9YGP6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83787
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Academic Olympiads 2004). Consider an integer $n \geqslant 3$.

In a tournament of $n$ nations, each nation plays with the $n-1$ others.

The ranking is based on the number of matches won (a match can only be won or lost). In case of a tie, the ranking is based on the number of points scored.

Making a grand slam means winning all your matches. Getting the wooden spoon means losing all your matches.

a) Are there tournaments that can result in these scores:

Tournament of 6 nations.

$\left(\begin{array}{ccc}\text { Team } & \text { Wins } & \text { Losses } \\ A & 5 & 0 \\ B & 4 & 1 \\ C & 4 & 1 \\ D & 1 & 4 \\ E & 1 & 4 \\ F & 0 & 5\end{array}\right)$

Tournament of 5 nations.

$\left(\begin{array}{ccc}\text { Teams } & \text { Wins } & \text { Losses } \\ A & 3 & 1 \\ B & 3 & 1 \\ C & 2 & 2 \\ D & 1 & 3 \\ E & 1 & 3\end{array}\right)$

b) Prove that the integers $n$ for which there exists a tournament where the winner has as many wins as losses are the odd integers.

c) For which values of $n$ does there exist a tournament where the second place has more losses than wins?

d) For which values of $n$ does there exist a tournament where the top three can be ranked without having to look at the number of points scored?

e) For what minimum value of $n$ does there exist a tournament where the top three can be ranked without having to look at the number of points scored, knowing that there was no grand slam?

f) Let $k \geqslant 0$ be a fixed integer. For what minimum value of $n$ does there exist a tournament where the top three can be ranked without having to look at the number of points scored, knowing that the first place has at least $k$ losses?
