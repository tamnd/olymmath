---
tag: DB2J5H6FJA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h518424
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5367
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207515
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2010
    source: hf-ai-mo-aops
    label: 2010 Olympic Revenge
---
Secco and Ramon are drunk in the real line over the integer points $a$ and $b$ , respectively. Our real line is a little bit special, though: the interval $(-\infty, 0)$ is covered by a sea of lava. Being aware of this fact, and also because they are drunk, they decided to play the following game: initially they choose an integer number $k>1$ using a fair dice as large as desired, and therefore they start the game. In the first round, each player writes the point $h$ for which it wants to go.

After that, they throw a coin: if the result is heads, they go to the desired points; otherwise, they go to the points $2g - h$ , where $g$ is the point where each of the players were in the precedent round (that is, in the first round $g = a$ for Secco and $g = b$ for Ramon). They repeat this procedure in the other rounds, and the game finishes when some of the player is over a point exactly $k$ times bigger than the other (if both of the player end up in the point $0$ , the game finishes as well).

Determine, in values of $k$ , the initial values $a$ and $b$ such that Secco and Ramon has a winning strategy to finish the game alive.

*Observation: If any of the players fall in the lave, he dies and both of them lose the game*
