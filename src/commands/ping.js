// SlashCommandBuilder という部品を discord.js からインポートしています。
// これにより、スラッシュコマンドを簡単に構築できます。
const { SlashCommandBuilder } = require("discord.js");

// 以下の形式にすることで、他のファイルでインポートして使用できるようになります。
module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("botが返事します"),
    execute: async function (interaction) {
        const date = new Date();
        const jpDate = date.toLocaleString("ja-JP");

        await interaction.reply(`pong!
        ${jpDate}`);
    },
};

// module.exportsの補足
// キー・バリューの連想配列のような形で構成されています。
//
// module.exports = {
//    キー: バリュー,
//    キー: バリュー,
// };
//