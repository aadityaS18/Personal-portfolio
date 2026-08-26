import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

function Tabs({ className, ...props }) {
  return <TabsPrimitive.Root data-slot="tabs" className={cn("flex flex-col gap-2", className)} {...props} />;
}

function TabsList({ className, ...props }) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-muted text-muted-foreground inline-flex h-10 w-fit max-w-full items-center justify-start rounded-full p-1",
        className
      )}
      {...props}
    />
  );
}

function TabsTrigger({ className, ...props }) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "inline-flex h-full items-center justify-center rounded-full px-4 text-sm font-semibold whitespace-nowrap transition-colors",
        "text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
        "focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none",
        className
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }) {
  return <TabsPrimitive.Content data-slot="tabs-content" className={cn("outline-none", className)} {...props} />;
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
