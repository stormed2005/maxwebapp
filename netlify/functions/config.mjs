export default async()=>Response.json({channel_id:process.env.MAX_CHANNEL_ID||'',max_ready:Boolean(process.env.MAX_BOT_TOKEN)});
