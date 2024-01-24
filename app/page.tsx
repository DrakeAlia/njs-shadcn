import { CalendarDemo } from "@/components/CalendarForm";
import { CardWithForm } from "@/components/CardForm";
import { CommandDemo } from "@/components/CommandForm";
import { DrawerDemo } from "@/components/DrawerForm";
import { TableDemo } from "@/components/TableForm";
import { ProfileForm } from "@/components/UserForm";
import { Button } from "@/components/ui/button";

import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Announcement } from "@/components/announcement";
import { Nav } from "@/components/Nav";


export default function Home() {
  return (
    <div className="container relative">
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>Build your component library</PageHeaderHeading>
        <PageHeaderDescription>
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Open Source.
        </PageHeaderDescription>
        <PageActions>
          <Button> Get Started</Button>
          <Button variant={"secondary"}>GitHub</Button>
        </PageActions>
      </PageHeader>
      <Nav className="[&>a:first-child]:text-primary" />
    </div>
  );
}




// export default function Home() {
//   return (
    // <main className="p-24">
    //   <Nav />
    //   <section className="py-8 flex flex-col items-center text-center gap-4">
    //     <h1 className="text-6xl font-bold">Shadcn is Amazing</h1>
    //     <p className="text-2xl text-muted-foreground">
    //       Hand-picked themes that you can copy and paste into your apps <br />
    //     </p>
    //   </section>
    //   <div className="flex items-center justify-center gap-2">
    //     <Button variant={"secondary"}>Learn More</Button>
    //     <Button variant={"default"}>Enroll Now</Button>
    //   </div>
    //   <section className="flex flex-col justify-center">
    //     <div className="m-20 p-9 px-5 py-8 rounded-2xl border-2 border-gray-700">
    //       <ProfileForm />
    //     </div>
    //     <div className="flex flex-row items-center gap-8 mb-4">
    //       <CalendarDemo />
    //       <CardWithForm />
    //     </div>
    //   </section>
    //   <div>
    //     <TableDemo />
    //   </div>
    //   <div>
    //     <CommandDemo />
    //   </div>
    // </main>
//   );
// }