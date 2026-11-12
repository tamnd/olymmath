---
tag: YGTNZSYMRF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 BMT Spring
    url: https://artofproblemsolving.com/community/c6h2752194
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70190
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2019
    source: hf-ai-mo-aops
    label: 2019 BMT Spring
---
A baseball league has $64$ people, each with a different $6$ -digit binary number whose base- $10$ value ranges from $0$ to $63$ . When any player bats, they do the following: for each pitch, they swing if their corresponding bit number is a $1$ , otherwise, they decide to wait and let the ball pass. For example, the player with the number $11$ has binary number $001011$ . For the first and second pitch, they wait; for the third, they swing, and so on. Pitchers follow a similar rule to decide whether to throw a splitter or a fastball, if the bit is $0$ , they will throw a splitter, and if the bit is $1$ , they will throw a fastball.
If a batter swings at a fastball, then they will score a hit; if they swing on a splitter, they will miss and get a "strike." If a batter waits on a fastball, then they will also get a strike. If a batter waits on a splitter, then they get a "ball." If a batter gets $3$ strikes, then they are out; if a batter gets $4$ balls, then they automatically get a hit. For example, if player $11$ pitched against player $6$ (binary is $000110$ ), the batter would get a ball for the first pitch, a ball for the second pitch, a strike for the third pitch, a strike for the fourth pitch, and a hit for the fifth pitch; as a result, they will count that as a "hit." If player $11$ pitched against player $5$ (binary is $000101$ ), however, then the fifth pitch would be the batter's third strike, so the batter would be "out."
Each player in the league plays against every other player exactly twice; once as batter, and once as pitcher. They are then given a score equal to the number of outs they throw as a pitcher plus the number of hits they get as a batter. What is the highest score received?
