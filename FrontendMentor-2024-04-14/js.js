let data = [
    [
      "Work",
      [
        [
          5,
          7
        ],
        [
          32,
          36
        ],
        [
          103,
          128
            ]
        ],
        "orange",
        "icon-work.svg"
    ],
    [
      "Play",
       [
        [
          1,
          2
        ],
        [
          10,
          8
        ],
         [
           23,
           29
         ]
        ],
        "#CCF",
        "icon-play.svg"
    ],
    [
      "Study",
      [
        [
          0,
          1
        ],
        [
          4,
          7
        ],
        [
          13,
          19
        ]
    ],
    "pink",
    "icon-study.svg"
    ],
    [
      "Exercise",
       [
        [
          1,
          1
        ],
        [
            4,
           5
        ],
        [
          11,
          18
        ]
        ],
        "#CFC",
        "icon-exercise.svg"
    ],
    [
      "Social",
      [
         [
          1,
          3
         ],
        [
          5,
          10
        ],
        [
          21,
          23
        ]
        ],
        "purple",
        "icon-social.svg"
    ],
    [
      "Self Care",
      [
        [
          0,
          1
        ],
        [
          2,
          2
        ],
        [
          7,
          11
        ]
        ],
        "yellow",
        "icon-self-care.svg"
    ]
  ]

function ChangeBlocks(a)
{
    let blockContainerContent = "";
    let lastWhat = "";
    if(a==0) lastWhat = "day";
    else if(a==1) lastWhat = "week";
    else if(a==2) lastWhat = "month";

    for (const iterator of data) {
        blockContainerContent += `
        <div class="block" style="background-color: ${iterator[2]}">
        <section>
          <img src="images/${iterator[3]}">
        </section>
        <div>
        <div><h2>${iterator[0]}</h2><a href="#"><img src="images/icon-ellipsis.svg"></a></div>
        <p>${iterator[1][a][0]}hrs</p> 
        <p>Last ${lastWhat} - ${iterator[1][a][1]}hrs</p>
        </div>
        </div>`
    }

    document.getElementById('blockContainer').innerHTML = blockContainerContent;

}