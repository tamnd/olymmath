---
tag: V72WYCHXPC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Harvard-MIT Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h485167
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=71333
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=262121
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt/2000
    source: hf-ai-mo-aops
    label: 2000 Harvard-MIT Mathematics Tournament
---
The Cincinnati Reals are playing the Houston Alphas in the last game of the Swirled Series. The Alphas are leading by $1$ run in the bottom of the $9\text{th}$ (last) inning, and the Reals are at bat. Each batter has a $\dfrac{1}{3}$ chance of hitting a single and a $\dfrac{2}{3}$ chance of making an out. If the Reals hit $5$ or more singles before they make $3$ outs, they will win. If the Reals hit exactly $4$ singles before they make $3$ outs, they will tie the game and send it into extra innings, and they will have a $\dfrac{3}{5}$ chance of eventually winning the game (since they have the added momentum of coming from behind). If the Reals hit fewer than $4$ singles, they will LOSE! What is the probability that the Alphas hold off the Reals and win, sending the packed Alphadome into a frenzy? Express the answer as a fraction.
